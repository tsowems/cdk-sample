import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as NewP from '../lib/new-p-stack';


test('confirm stack is created', () => {
  const app = new cdk.App();
//     // WHEN
  const stack = new NewP.NewPStack(app, 'MyTestStack');
//     // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    "FunctionName": "first-cdk-lambda",
    "Handler": "index.handler",
    "MemorySize": 128,
    "Runtime": "nodejs16.x"
  });
});
