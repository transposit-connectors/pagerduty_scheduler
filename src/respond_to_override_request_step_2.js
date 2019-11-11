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
			"text": "You've requested a PagerDuty override, when would you like the override for?"
		}
	},
	{
			"type": "actions",
			"elements": [
				{
					"type": "static_select",
					"action_id": "start_time",
					"placeholder": {
						"type": "plain_text",
						"text": "Start time",
						"emoji": true
					},
					"options": [
						{
							"text": {
								"type": "plain_text",
								"text": "0:00",
								"emoji": true
							},
							"value": "value-0"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "1:00",
								"emoji": true
							},
							"value": "value-1"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "2:00",
								"emoji": true
							},
							"value": "value-2"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "3:00",
								"emoji": true
							},
							"value": "value-3"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "4:00",
								"emoji": true
							},
							"value": "value-4"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "5:00",
								"emoji": true
							},
							"value": "value-5"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "6:00",
								"emoji": true
							},
							"value": "value-6"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "7:00",
								"emoji": true
							},
							"value": "value-7"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "8:00",
								"emoji": true
							},
							"value": "value-8"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "9:00",
								"emoji": true
							},
							"value": "value-9"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "10:00",
								"emoji": true
							},
							"value": "value-10"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "11:00",
								"emoji": true
							},
							"value": "value-11"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "12:00",
								"emoji": true
							},
							"value": "value-12"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "13:00",
								"emoji": true
							},
							"value": "value-13"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "14:00",
								"emoji": true
							},
							"value": "value-14"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "15:00",
								"emoji": true
							},
							"value": "value-15"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "16:00",
								"emoji": true
							},
							"value": "value-16"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "17:00",
								"emoji": true
							},
							"value": "value-17"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "18:00",
								"emoji": true
							},
							"value": "value-18"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "19:00",
								"emoji": true
							},
							"value": "value-19"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "20:00",
								"emoji": true
							},
							"value": "value-20"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "21:00",
								"emoji": true
							},
							"value": "value-21"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "22:00",
								"emoji": true
							},
							"value": "value-22"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "23:00",
								"emoji": true
							},
							"value": "value-23"
						}                      
					]
				}
            ]
    }
  ];
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