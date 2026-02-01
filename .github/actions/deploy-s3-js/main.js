const core = import('@actions/core')
const github = import('@actions/github')
const exec = import('@actions/exec')

export function run () {
    core.notice("Hello world from my custom js action")
}

run()