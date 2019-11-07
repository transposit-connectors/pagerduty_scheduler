({ http_event }) => {
  console.log(http_event);
  const parsed_body = http_event.parsed_body;
  const workspaceId = parsed_body.team_id;
  const userId = parsed_body.user_id;
  const response_url = parsed_body.response_url; 
    
  setImmediate(() => {
    console.log(JSON.parse(parsed_body.payload));
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
  //return api.run("slack_webhook.acknowledge_slash_command"); 
  return { status_code: 200 };

}