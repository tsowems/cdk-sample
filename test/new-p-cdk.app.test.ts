import { handler } from "../lib/src";

describe("CDK app Test", () => {
    it(`return name and test`, async () => {
        const response = await handler({ name: 'Taiwo'});
        expect(response).toStrictEqual('Good Job Taiwo!')
    })

    it(`return name and test`, async () => {
        const response = await handler({ name: ''});
        expect(response).toStrictEqual('Good Job!')
    })
})