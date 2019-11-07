(params) => {
  
  const parameters = {};
  parameters.http_event = params.http_event;
  parameters.text = 'hello, world!';
  parameters.blocks = ;
  parameters.response_type = 'ephemeral';
  
  return api.run('slack_webhook.respond_to_slash_command', parameters);
  return {
    mission: "complete"
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */