(params) => {

  const parameters = {};
  parameters.id = '<required_string>';
  parameters.$body = {
    override : {
      start : '<required_date-time>',
      end : '<required_date-time>',
      user : {
        id : '<string>',
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