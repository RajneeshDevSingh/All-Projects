import OpenAI from 'openai';
import { OpenAI_GPTKey } from './Constant';

const openai = new OpenAI({
  apiKey: OpenAI_GPTKey, // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});

export default openai;