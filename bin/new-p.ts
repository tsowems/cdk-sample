
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NewPStack } from '../lib/new-p-stack';

const app = new cdk.App();
new NewPStack(app, 'NewPStack', {});