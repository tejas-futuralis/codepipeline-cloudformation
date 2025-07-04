#!/bin/bash

aws cloudformation deploy --template-file pipeline.yaml --stack-name MyPipelineStack --capabilities CAPABILITY_NAMED_IAM --profile AWSPowerUserAccess-885885860822