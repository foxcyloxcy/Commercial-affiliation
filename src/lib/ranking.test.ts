import { describe,it,expect } from 'vitest';
import {scoreProduct} from './ranking';
describe('scoreProduct',()=>{
 it('uses transparent weighting',()=>expect(scoreProduct({value:100,trend:0,quality:0,affordability:0,reliability:0})).toBe(35));
 it('rejects out-of-range evidence',()=>expect(()=>scoreProduct({value:101,trend:0,quality:0,affordability:0,reliability:0})).toThrow(RangeError));
});
