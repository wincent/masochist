---
title: The joy of manual options parsing in C
tags: c blog
---

It's written, it compiles, but it's not tested yet.

There's something about this kind of repetitive code. Repetitive, wordy, lengthy, error-prone. You could use an [API](/wiki/API) like `getopt` which provides a convenient abstraction, but if you do so you lose that very fine degree of control over things like error messages and conflict-handling.

You could try to identify the common code and extract it out into a function (or, ugh, a macro) without losing any of the flexibility and control, but you run the risk of increasing complexity (possibly adding bugs) and perhaps harming readability.

If you're writing a tool like [Git](/wiki/Git) with jillions of subcommands and a zillion options then it probably makes sense to pursue this kind of abstraction, but for a write-once [command-line](/wiki/command-line) tool then it's probably best to just do the unpleasant work, write some tests to mark sure the darn thing actually works, and forget about it.

    NSArray *parse_options_or_die(options_t *options, int argc, char *argv[])
    {
        int errors = 0;
        BOOL scanning_paths = NO;
        NSMutableArray *paths = [NSMutableArray array];
        for (int i = 1; i < argc; i++)
        {
            if (scanning_paths)
                [paths addObject:[NSString stringWithUTF8String:argv[i]]];
            else if (!strcmp(argv[i], "--"))
                scanning_paths = YES;
            else if (!strcmp(argv[i], "-r") || !strcmp(argv[i], "--recurse"))
            {
                if (options->recurse == -1)
                {
                    report_conflicting_options(argv[i], "no-recurse");
                    errors++;
                }
                else
                    options->recurse = 1;
            }
            else if (!strcmp(argv[i], "-R") || !strcmp(argv[i], "--no-recurse"))
            {
                if (options->recurse == 1)
                {
                    report_conflicting_options(argv[i], "recurse");
                    errors++;
                }
                else
                    options->recurse = -1;
            }
            else if (!strcmp(argv[i], "-e") || !strcmp(argv[i], "--regular-expression"))
            {
                if (options->regex == -1)
                {
                    report_conflicting_options(argv[i], "no-regular-expression");
                    errors++;
                }
                else
                    options->regex = 1;
            }
            else if (!strcmp(argv[i], "-E") || !strcmp(argv[i], "--no-regular-expression"))
            {
                if (options->regex == 1)
                {
                    report_conflicting_options(argv[i], "regular-expression");
                    errors++;
                }
                else
                    options->regex = -1;
            }
            else if (!strcmp(argv[i], "-i") || !strcmp(argv[i], "--case-insensitive") ||
                     !strcmp(argv[i], "--no-case-sensitive"))
            {
                if (options->case_insensitive == -1)
                {
                    report_conflicting_options(argv[i], "case-sensitive");
                    errors++;
                }
                else
                    options->case_insensitive = 1;
            }
            else if (!strcmp(argv[i], "-I") || !strcmp(argv[i], "--no-case-insensitive") ||
                     !strcmp(argv[i], "--case-sensitive"))
            {
                if (options->case_insensitive == 1)
                {
                    report_conflicting_options(argv[i], "case-insensitive");
                    errors++;
                }
                else
                    options->case_insensitive = -1;
            }
            else if (!strcmp(argv[i], "-g") || !strcmp(argv[i], "--replace-all"))
            {
                if (options->global == -1)
                {
                    report_conflicting_options(argv[i], "no-replace-all");
                    errors++;
                }
                else
                    options->global = 1;
            }
            else if (!strcmp(argv[i], "-G") || !strcmp(argv[i], "--no-replace-all"))
            {
                if (options->global == 1)
                {
                    report_conflicting_options(argv[i], "replace-all");
                    errors++;
                }
                else
                    options->global = -1;
            }
            else if (!strcmp(argv[i], "-p") || !strcmp(argv[i], "--preview"))
            {
                if (options->preview == -1)
                {
                    report_conflicting_options(argv[i], "no-preview");
                    errors++;
                }
                else
                    options->preview = 1;
            }
            else if (!strcmp(argv[i], "-P") || !strcmp(argv[i], "--no-preview"))
            {
                if (options->preview == 1)
                {
                    report_conflicting_options(argv[i], "preview");
                    errors++;
                }
                else
                    options->preview = -1;
            }
            else if (!strcmp(argv[i], "-u") || !strcmp(argv[i], "--gui"))
            {
                if (options->gui == -1)
                {
                    report_conflicting_options(argv[i], "no-gui");
                    errors++;
                }
                else
                    options->gui = 1;
            }
            else if (!strcmp(argv[i], "-U") || !strcmp(argv[i], "--no-gui"))
            {
                if (options->gui == 1)
                {
                    report_conflicting_options(argv[i], "gui");
                    errors++;
                }
                else
                    options->gui = -1;
            }
            else if (!strcmp(argv[i], "-d") || !strcmp(argv[i], "--dry-run"))
            {
                if (options->dry_run == -1)
                {
                    report_conflicting_options(argv[i], "no-dry-run");
                    errors++;
                }
                else
                    options->dry_run = 1;
            }
            else if (!strcmp(argv[i], "-D") || !strcmp(argv[i], "--no-dry-run"))
            {
                if (options->dry_run == 1)
                {
                    report_conflicting_options(argv[i], "dry-run");
                    errors++;
                }
                else
                    options->dry_run = -1;
            }
            else if (!strcmp(argv[i], "-v") || !strcmp(argv[i], "--verbose"))
            {
                if (options->verbose == -1)
                    options->verbose = 1;
                else
                    options->verbose++;
            }
            else if (!strcmp(argv[i], "-V") || !strcmp(argv[i], "--no-verbose"))
            {
                if (options->verbose == 1)
                    options->verbose = -1;
                else
                    options->verbose--;
            }
            else if (!strcmp(argv[i], "-c"))
            {
                if (i + 1 == argc || argv[i + 1][0] == '-')
                {
                    fprintf(stderr, "error: option -c requires an argument (-c file)\n");
                    errors++;
                }
                else if (options->skip_conf_files == 1)
                {
                    report_conflicting_options(argv[i], "no-conf");
                    errors++;
                }
                else if (options->conf_path && strcmp(argv[i + 1], options->conf_path))
                {
                    report_conflicting_options(argv[i], "conf");
                    errors++;
                }
                else
                {
                    i++;
                    options->conf_path = argv[i];
                }
            }
            else if (!strncmp(argv[i], "--conf", 6))
            {
                if (options->skip_conf_files == 1)
                {
                    report_conflicting_options(argv[i], "no-conf");
                    errors++;
                }
                else if (argv[i][6] != '=' || strlen(argv[i]) < 8)
                {
                    fprintf(stderr, "error: option --conf requires an argument (--conf=file)\n");
                    errors++;
                }
                else if (options->conf_path && strcmp(argv[i] + 7, options->conf_path))
                {
                    report_conflicting_options(argv[i], "conf");
                    errors++;
                }
                else
                    options->conf_path = argv[i] + 7;
            }
            else if (!strcmp(argv[i], "-C") || !strcmp(argv[i], "--no-conf"))
            {
                if (options->conf_path)
                {
                    report_conflicting_options(argv[i], "conf");
                    errors++;
                }
                else
                    options->skip_conf_files = 1;
            }
            else if (!strcmp(argv[i], "-h") || !strcmp(argv[i], "--help"))
                show_usage_and_exit();
            else if (!strcmp(argv[i], "--version"))
                show_version_and_exit();
            else if (argv[i][0] == '-')
            {
                fprintf(stderr, "error: unrecognized option or argument: %s\n", argv[i]);
                errors++;
            }
            else
                [paths addObject:[NSString stringWithUTF8String:argv[i]]];
        }
        if (errors)
        {
            fprintf(stderr, "For usage information see: %s --help\n", argv[0]);
            exit(EXIT_FAILURE);
        }
        return paths;
    }
