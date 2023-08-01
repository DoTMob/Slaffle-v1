import React from 'react';
import { HoverCardPortal, HoverCardContent } from '~/components/ui';
import { OptionHoverProps } from 'librechat-data-provider';

const openAI = {
  max: 'com_endpoint_openai_max',
  temp: 'com_endpoint_openai_temp',
  topp: 'com_endpoint_openai_topp',
  freq: 'com_endpoint_openai_freq',
  pres: 'com_endpoint_openai_pres',
};

const types = {
  anthropic: {
    temp: 'Ranges from 0 to 1. Use temp closer to 0 for analytical / multiple choice, and closer to 1 for creative and generative tasks. We recommend altering this or Top P but not both.',
    topp: 'Top-p changes how the model selects tokens for output. Tokens are selected from most K (see topK parameter) probable to least until the sum of their probabilities equals the top-p value.',
    topk: 'Top-k changes how the model selects tokens for output. A top-k of 1 means the selected token is the most probable among all tokens in the model\'s vocabulary (also called greedy decoding), while a top-k of 3 means that the next token is selected from among the 3 most probable tokens (using temperature).',
    maxoutputtokens:
      ' 	Maximum number of tokens that can be generated in the response. Specify a lower value for shorter responses and a higher value for longer responses.',
  },
  google: {
    temp: 'com_endpoint_google_temp',
    topp: 'com_endpoint_google_topp',
    topk: 'com_endpoint_google_topk',
    maxoutputtokens: 'com_endpoint_google_maxoutputtokens',
  },
  openAI,
  gptPlugins: {
    func: 'com_endpoint_func_hover',
    skip: 'com_endpoint_skip_hover',
    ...openAI,
  },
};

function OptionHover({ endpoint, type, side }: OptionHoverProps) {
  const text = types[endpoint][type];
  return (
    <HoverCardPortal>
      <HoverCardContent side={side} className="w-80 ">
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
        </div>
      </HoverCardContent>
    </HoverCardPortal>
  );
}

export default OptionHover;
