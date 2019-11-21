# PagerDuty Scheduler Bot

A Slack command to make the process of scheduling a PagerDuty override more efficient, encouraged, and documented.

Time estimate: 10 minutes to setup

Before you begin, you need: 
- A Transposit account with a forked version of [the application](https://console.transposit.com/t/transposit-sample/pagerduty_scheduler?fork=true)
- A Slack workspace where you can create and install apps 
- A PagerDuty account with a schedule

## Setup Transposit and PagerDuty

After you have forked [the application](https://console.transposit.com/t/transposit-sample/pagerduty_scheduler?fork=true) and logged into PagerDuty:

1. In PagerDuty, navigate to the schedule you want use with the Slack command, the url will look something like this: https://example.pagerduty.com/schedules#ABCDEFG
2. Copy the schedule ID at the end of the URL (E.g. ABCDEFG for the URL above)
3. In Transposit, the `post_schedules_by_id_overrides` JavaScript operation, paste it into the string that says `<SCHEDULE ID HERE>`
4. Under Deploy > Production Keys, select Add key, and follow the instructions in the link listed for how to get a PagerDuty REST API key
5. Lastly in Transposit, under Code > Auth & settings > Keys, select Connect, and the option to copy an existing authorization, so you don't need to copy the API key again

## Setup Slack

1. Create a new app [here](https://api.slack.com/apps) in Slack
2. Copy the URL for your webhook in Transposit under Deploy > Endpoints, under the deploy as webhook checkbox, similar to this: `https://pagerduty-scheduler-18c5o.transposit.io/api/v1/execute-http/webhook?api_key=abcdefghijklmnop123`
3. In your Slack App configure page, select Interactive Components, turn on interactivity, and paste in the URL you copied from Transposit into the Request URL
4. In your Slack App configure page, select Slash Commands, and select Create New Command
5. Name the command (E.g. `/request-override`), paste the same webhook URL from before as the Request URL, give it a short description for your team to see, and save it
6. In your Slack App configure page, select Install App, and allow permission to access your workspace
7. You should now be able to use the `/request-override` command in your workspace

> Note: Each user who uses the app will get prompted to add their PagerDuty user ID

## Go further

* Team members could be asked for coverage privately instead of a channel
* Integrate with Google Calendar
* Include multiple PagerDuty schedules
* Be able to view and edit schedules in Slack
