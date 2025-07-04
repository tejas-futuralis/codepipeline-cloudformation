#!/bin/bash

aws cloudformation deploy --template-file pipeline.yaml --stack-name MyPipelineStack --capabilities CAPABILITY_NAMED_IAM --parameter-overrides GitHubOwner=tejas-futuralis GitHubRepo=codepipeline-deploy GitHubBranch=main --profile AWSPowerUserAccess-885885860822