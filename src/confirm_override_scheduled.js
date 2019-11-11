(params) => {

  const parameters = {};
  parameters.http_event = params.http_event;
  parameters.delete_original = false;
  parameters.replace_original = false;
  parameters.blocks = [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Someone has accepted the override coverage request and it has been scheduled on PagerDuty."
			}
		}
	];
  parameters.response_type = 'in_channel';
  
  return api.run('slack_webhook.respond_to_interaction', parameters);
  return {
    mission: "complete"
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */