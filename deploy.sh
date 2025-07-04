#!/bin/bash

aws cloudformation deploy --template-file pipeline.yaml --stack-name MyPipelineStack --capabilities CAPABILITY_NAMED_IAM --parameter-overrides GitHubBranch=main GitHubConnectionArn=arn:aws:codeconnections:us-east-1:885885860822:connection/814e63dc-c551-415a-bb99-bf05ade9445f --profile AWSPowerUserAccess-885885860822