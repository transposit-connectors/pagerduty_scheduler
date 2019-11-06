({ http_event }) => {
  console.log(http_event);
  const parsed_body = http_event.parsed_body;
  const workspaceId = parsed_body.team_id;
  const userId = parsed_body.user_id;
  const response_url = parsed_body.response_url;
  
  setImmediate(() => {
    let user = api.user({type: "slack", workspaceId, userId});
    if (user) {
      console.log(response_url);
      var test = api.run("slack_webhook.post_message_to_incoming_webhook", {response_url : response_url});
      console.log(test);
      // var text_match = /(\S+) (\S+)/.exec(parsed_body.text.trim());
      // if (text_match) {
        // console.log(text_match);
		// let message = api.run('this.transfer_file', { source_url: text_match[1], target_url: text_match[2] }, {asUser: user.id})[0];
		// api.run("slack_webhook.post_to_response_url", {
		// response_url: response_url,
		// post_body: {text: message}
		// });      
      // } else {
      //   api.run("slack_webhook.post_to_response_url", {
      //     response_url: response_url,
      //     post_body: {text: "Couldn't parse the source and target urls."}
      //   });      
      // }
    } else {
      api.run("slack_webhook.post_to_response_url", {
        response_url: response_url,
        post_body: {text: 'Please configure your user at ' +  env.getBuiltin().appUrl}
      });      
    }
  });
  return { status_code: 200 };
}
