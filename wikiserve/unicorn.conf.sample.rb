env = ENV['RACK_ENV'] || 'production'
worker_processes(env == 'production' ? 4 : 1)
#listen '/data/wikiserve/deploy/shared/unicorn.sock'
working_directory '/data/wikiserve/deploy/current'
pid '/data/wikiserve/deploy/shared/pids/unicorn.pid'
stderr_path '/var/log/unicorn/wikiserve.stderr.log'
stdout_path '/var/log/unicorn/wikiserve.stdout.log'
