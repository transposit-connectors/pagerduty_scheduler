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
				"text": "Someone has request on-call coverage for " + params.start_date + " at " + params.start_time 
          + " until " + params.end_date + " at " + params.end_time + ". Can you take it?"
			},
			"accessory": {
				"type": "button",
              	"action_id": "accept_override_request",
              	"value": "1234"
				"text": {
					"type": "plain_text",
					"text": "Yes",
					"emoji": true
				}
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