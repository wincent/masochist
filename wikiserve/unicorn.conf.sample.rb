env = ENV['RACK_ENV'] || 'production'
worker_processes(env == 'production' ? 4 : 1)
working_directory '/var/wikiserve/deploy/current/wikiserve'
pid '/var/run/wikiserve/wikiserve.pid'
stderr_path '/var/log/wikiserve/unicorn.stderr.log'
stdout_path '/var/log/wikiserve/unicorn.stdout.log'
