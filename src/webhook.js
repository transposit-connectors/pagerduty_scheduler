({ http_event }) => {
  console.log(http_event);
  const parsed_body = http_event.parsed_body;
  const workspaceId = parsed_body.team_id;
  const userId = parsed_body.user_id;
  const response_url = parsed_body.response_url;
  
  setImmediate(() => {
    let user = api.user({type: "slack", workspaceId, userId});
    if (user) {
      var initial_response = api.run("this.post_message_to_incoming_webhook", {webhook_url: response_url});
      // console.log(initial_response);
    } else {
      // api.run("slack_webhook.post_to_response_url", {
      //   response_url: response_url,
      //   post_body: {text: 'Please configure your user at ' +  env.getBuiltin().appUrl}
      // });      
    }
  });
  return { status_code: 200 };
}
