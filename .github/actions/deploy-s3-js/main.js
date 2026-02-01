const core = require('@actions/core');
const exec = require('@actions/exec');

function run () {
    // Get input
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});

    // Upload to AWS
    // Looks automatically for env for authentication when using aws sync
    // Env can be found in the workflow
    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);


    // Output the website's url
    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl);
}

run()