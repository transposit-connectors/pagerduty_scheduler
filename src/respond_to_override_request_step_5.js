(params) => {

  const parameters = {};
  parameters.http_event = params.http_event;
  parameters.delete_original = false;
  parameters.replace_original = true;
  // parameters.text = '<string>';
  // parameters.attachments = (SELECT []);
  parameters.blocks = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "You've requested a PagerDuty override for " + params.start_date_time + " until " + params.end_date_time + ". Please confirm."
		}
	},    
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "Okay, let's see who can take this shift."
		}
	}];
  parameters.response_type = 'ephemeral';
  
  return api.run('slack_webhook.respond_to_interaction', parameters);
  return {
    mission: "complete"
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */