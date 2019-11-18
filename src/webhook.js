({ http_event }) => {
  console.log(http_event);
  const parsed_body = http_event.parsed_body;
  const workspaceId = parsed_body.team_id;
  const userId = parsed_body.user_id;

  setImmediate(() => {  
	var user = api.user({type: "slack", workspaceId, userId});
	if (user) {
	  if (parsed_body.command == "/request-override") {
		  var command_response = api.run("this.respond_to_override_request_step_0",{http_event: http_event});
	  }         
	} else {
	  api.run("slack_webhook.respond_to_slash_command", {
		http_event: http_event,
		text: 'Please configure your user at ' +  env.getBuiltin().appUrl
	  });      
	}    
  });
	 
  if (parsed_body.payload) {
	  const action_payload = JSON.parse(parsed_body.payload);
		var user = api.user({type: "slack", workspaceId: action_payload.team.id, userId: action_payload.user.id});                
		if (user) {
			if (action_payload.actions) {
				if (action_payload.actions[0].action_id == "start_date") {
					stash.put(user.id + "_start_date",action_payload.actions[0].selected_date);
					api.run("this.respond_to_override_request_step_1",{http_event: http_event});
				} else if (action_payload.actions[0].action_id == "end_date") {
					stash.put(user.id + "_end_date",action_payload.actions[0].selected_date);
					api.run("this.respond_to_override_request_step_2",{http_event: http_event});              
				} else if (action_payload.actions[0].action_id == "start_time") {
					stash.put(user.id + "_start_time",action_payload.actions[0].selected_option.text.text);
					api.run("this.respond_to_override_request_step_3",{http_event: http_event});              
				} else if (action_payload.actions[0].action_id == "end_time") { 
					stash.put(user.id + "_end_time",action_payload.actions[0].selected_option.text.text);
					api.run("this.respond_to_override_request_step_4",{http_event: http_event, start_date: stash.get(user.id + "_start_date"), end_date: stash.get(user.id + "_end_date"), start_time: stash.get(user.id + "_start_time"), end_time: stash.get(user.id + "_end_time")});                            
				} else if (action_payload.actions[0].action_id == "override_request_confirmation") {
					api.run("this.respond_to_override_request_step_5",{http_event: http_event}); 
					api.run("this.share_override_request", {http_event: http_event, start_date: stash.get(user.id + "_start_date"), end_date: stash.get(user.id + "_end_date"), start_time: stash.get(user.id + "_start_time"), end_time: stash.get(user.id + "_end_time")});
				} else if (action_payload.actions[0].action_id == "accept_override_request") {
					var start_date_time_string = stash.get(user.id + "_start_date") + " " + stash.get(user.id + "_start_time") + " UTC";
					var end_date_time_string = stash.get(user.id + "_end_date") + " " + stash.get(user.id + "_end_time") + " UTC";
					var start_date_time = new Date(start_date_time_string);
					var end_date_time = new Date(end_date_time_string);

					var pagerduty_user_id = api.run("this.get_pagerduty_user_id", {}, {"asUser":user.id})[0];
                  	console.log("hereeeee");
					var pageduty_override_response = api.run("this.post_schedules_by_id_overrides", {start: start_date_time.toISOString(), end: end_date_time.toISOString(), user_id: pagerduty_user_id})[0];
					console.log("results:");
                  	console.log(pageduty_override_response);
					if (pageduty_override_response.override.id) {
						api.run("this.confirm_override_scheduled", {http_event: http_event});
					}
				}
            }
	  } else {
		  api.run("slack_webhook.respond_to_interaction", {
				http_event: http_event,
            	replace_original: false,
            	response_type: 'ephemeral',
				text: 'Please first configure your user at ' +  env.getBuiltin().appUrl + ' before accepting an override request'
		  }); 
	  }
		}
	 
  return { status_code: 200 };

}
  
// code left over from when the information of being asked at all at one time	
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
  
