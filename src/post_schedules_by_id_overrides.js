(params) => {

  const parameters = {};
  parameters.id = '<required_string>';
  parameters.$body = {
    override : {
      start : params.start,
      end : params.end,
      user : {
        id : params.user_id,
        type : 'user_reference'
      }
    }
  };
  return api.run('pagerduty.post_schedules_by_id_overrides', parameters);
  
  
  
  
  
  return {
    mission: "complete"
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */