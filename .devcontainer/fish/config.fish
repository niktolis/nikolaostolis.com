# Project-specific Fish config for nikolaostolis.com

if status is-interactive
    if type -q starship
        starship init fish | source
    end

    alias nr='npm run'
    alias dev='npm run dev'
    alias check='npm run check'
    alias fmt='npm run format'
    alias preview='npm run preview'
    alias preview-deploy='npm run deploy:preview'
    alias live-deploy='npm run deploy'

    alias ll='ls -la'
    alias croot='cd /workspaces/nikolaostolis.com'
    alias share='cd /home/node/host-share'

    set -gx PROJECT_ROOT /workspaces/nikolaostolis.com
end