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
              stash.put("end_date",action_payload.actions[0].selected_date);
      		  api.run("this.respond_to_override_request_step_2",{http_event: http_event});              
            } else if (action_payload.actions[0].action_id == "start_time") {
              stash.put("start_time",action_payload.actions[0].selected_option.text.text);
      		  api.run("this.respond_to_override_request_step_3",{http_event: http_event});              
            } else if (action_payload.actions[0].action_id == "end_time") { 
              stash.put("end_time",action_payload.actions[0].selected_option.text.text);
      		  api.run("this.respond_to_override_request_step_4",{http_event: http_event, start_date: stash.get("start_date"), end_date: stash.get("end_date"), start_time: stash.get("start_time"), end_time: stash.get("end_time")});                            
            } else if (action_payload.actions[0].action_id == "override_request_confirmation") {
      		  api.run("this.respond_to_override_request_step_5",{http_event: http_event}); 
              api.run("this.share_override_request", {http_event: http_event,start_date: stash.get("start_date"), end_date: stash.get("end_date"), start_time: stash.get("start_time"), end_time: stash.get("end_time")});
            } else if (action_payload.actions[0].action_id == "accept_override_request") {
              var start_date_time_string = stash.get("start_date") + " " + stash.get("start_time") + " UTC";
              var end_date_time_string = stash.get("end_date") + " " + stash.get("end_time") + " UTC";
              var start_date_time = new Date(start_date_time_string);
              var end_date_time = new Date(end_date_time_string);
              var pageduty_override_response = api.run("this.post_schedules_by_id_overrides", {start: start_date_time.toISOString(), end: end_date_time.toISOString()});
              console.log(pageduty_override_response);
              if (pageduty_override_response) {
                api.run("this.confirm_override_scheduled", {http_event: http_event});
              }
            }
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
  
