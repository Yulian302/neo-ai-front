/**
 * @jest-environment jsdom
 */
import getModels from "../api/getModels";
import {Model} from "../../templates/models/types";


export {}
describe('getModels() api testing', () => {
    it('should load models data', async () => {
        const typeMock = {} as Model
        return await getModels().then(data => {
            expect(data).toBeDefined()
        })
    });
})