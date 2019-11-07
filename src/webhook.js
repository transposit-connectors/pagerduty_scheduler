({ http_event }) => {
  console.log(http_event);
  const parsed_body = http_event.parsed_body;
  const workspaceId = parsed_body.team_id;
  const userId = parsed_body.user_id;
  const response_url = parsed_body.response_url; 
  
  setImmediate(() => {
    if (parsed_body.payload) {
    	const action_payload = JSON.parse(parsed_body.payload);
    	if (action_payload.actions) {
            if (action_payload.actions[0].action_id == "start_date") {
              stash.put("start_date",action_payload.actions[0].selected_date);
      		  api.run("this.respond_to_override_request_step_1",{http_event: http_event});
            } else if (action_payload.actions[0].action_id == "end_date") {
              var end_date = action_payload.actions[0].selected_date;
      		  api.run("this.respond_to_override_request_step_2",{http_event: http_event});              
            } else if (action_payload.actions[0].action_id == "start_time") {
              var start_time = action_payload.actions[0].selected_option.text.text;
      		  api.run("this.respond_to_override_request_step_3",{http_event: http_event});              
            } else if (action_payload.actions[0].action_id == "end_time") { 
              var end_time = action_payload.actions[0].selected_option.text.text;
      		  api.run("this.respond_to_override_request_step_4",{http_event: http_event, start_date: stash.get("start_date"), end_date: end_date, start_time: start_time, end_time: end_time});                            
            } else if (action_payload.actions[0].action_id == "override_request_submit") {
              console.log("COMPLETE!");
            }
             // var resp = api.run("this.respond_to_interaction", {http_event: http_event});
    	}
    }
    let user = api.user({type: "slack", workspaceId, userId});
    if (user) {
      var command_response = api.run("this.respond_to_override_request_step_0",{http_event: http_event});
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
  
  
//   setImmediate(() => {
//     if (parsed_body.payload) {
//       const action_payload = JSON.parse(parsed_body.payload);
//       if (action_payload.actions && action_payload.actions[0].value == "override_request_submission") {
//         console.log("A submission has been receieved");
//         var resp = api.run("this.respond_to_interaction", {http_event: http_event});
//       }
//     }
//     let user = api.user({type: "slack", workspaceId, userId});
//     if (user) {
//       var command_response = api.run("this.respond_to_slash_command",{http_event: http_event});
//     } else {
//       // api.run("slack_webhook.post_to_response_url", {
//       //   response_url: response_url,
//       //   post_body: {text: 'Please configure your user at ' +  env.getBuiltin().appUrl}
//       // });      
//     }
//   });
//   //return api.run("slack_webhook.acknowledge_slash_command"); 
//   return { status_code: 200 };

// }
  
