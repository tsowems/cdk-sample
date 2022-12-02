import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import path = require('path');

export class NewPStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'lambdaFunction', {
      functionName: 'first-cdk-lambda',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lib/src')),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_16_X,
      memorySize: 128
    })
  }
}
