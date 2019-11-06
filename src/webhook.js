({ http_event }) => {
  console.log(http_event);
  const parsed_body = http_event.parsed_body;
  const workspaceId = parsed_body.team_id;
  const userId = parsed_body.user_id;
  const response_url = parsed_body.response_url;
    
  setImmediate(() => {
    let user = api.user({type: "slack", workspaceId, userId});
    if (user) {
      var command_response = api.run("this.respond_to_slash_command",{http_event: http_event});
    } else {
      // api.run("slack_webhook.post_to_response_url", {
      //   response_url: response_url,
      //   post_body: {text: 'Please configure your user at ' +  env.getBuiltin().appUrl}
      // });      
    }
  });
  return { status_code: 200 };
}

// ({ http_event }) => {
//   const parsed_body = http_event.parsed_body;
//   const workspaceId = parsed_body.team_id;
//   const userId = parsed_body.user_id;
  
//   setImmediate(() => {
    
//       var messagebody = {
//     "blocks": [
//         {
//             "type": "section",
//             "text": {
//                 "type": "mrkdwn",
//                 "text": "Take action on this alert"
//             }
//         },
//         {
//             "type": "actions",
//             "block_id": "actionblock789",
//             "elements": [
//                 {
//                     "type": "button",
//                     "text": {
//                         "type": "plain_text",
//                         "text": "Page Secondary"
//                     },
//                     "style": "primary",
//                     "value": "this.pageSecondary" // this could hold the operation id
//                 },
//                 {
//                     "type": "button",
//                     "text": {
//                         "type": "plain_text",
//                         "text": "Open runbook"
//                     },
//                     "style": "primary",
//                     "value": "this.OpenRunbookInitial" 
//                 },
//             ]
//         }
//     ]
// }
//     let [blank, endpoint, location1, location2, location3] = /https:\/\/hooks.slack.com\/(.+?)\/(.+?)\/(.+?)\/(.+)/.exec(http_event.parsed_body.response_url);
//     let result = api.run("raw_slack_webhook.respond_to_slash_command", {location1: location1, location2: location2, location3: location3, $body: messagebody})[0];
//   api.run("slack_webhook.respond_to_slash_command", { http_event, text });
//   });
//   return api.run("slack_webhook.acknowledge_slash_command");
// }