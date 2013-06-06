/*
Chatter time formatter

How to use :
- Include pre-requisites library on your html page
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.0/jquery.min.js" />
<script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/1.7.2/moment.min.js"></script>

- Start using this on your page :

- Configure the settings
    chattertime.init({
        "inputformat" : <specify the time format of the input, default: YYYY-MM-DDTHH:mm:ss Z>,
        "rangedaysago": <how many # days ago should be shown in the format, default 2 >,
        "time_format_error" : <error string when time is not in the correct input format>,
        "today" : <Format to be shown when the input time is today>,
        "yesterday" : <format to be shown when the input time is yesterday>,
        "daysago" : <Format to be shown if the input is still in the rage of the `rangedaysago`>,
        "other" : <Default Format to be shown>
    });

    chattertime.show(<input time format>);
*/

var chattertime = new function(){
    this.defaultsettings = {
        // standard chatter format
        "inputformat" : "YYYY-MM-DDTHH:mm:ss Z",
        "rangedaysago" : 2,
        "time_format_error" : "<span class='text-error'>Incorrect Time Format </span>",
        // This is the current output format supported
        // customize this for your needs
        "todayformat" : "[Today at] HH:mm a",
        "yesterdayformat" : "[Yesterday at] HH:mm a",
        "daysagoformat" : "[days ago at] HH:mm a",
        "otherformat"  : "MMMM, DD YYYY [at] HH:mm a"
    }

    this.settings = {};
    $(this).extend(this.settings, this.defaultsettings);

    this.init_default = function(){
        $(this).extend(this.settings, this.defaultsettings);
    }

    this.init = function(newsettings){
        if (newsettings != undefined){
            $(this).extend(this.settings, newsettings);
        }
    };

    this.show = function(newval){
        var newtime = moment(newval, this.settings.inputformat);
        if (newtime.isValid()){
            // check for # days ago
            var today = moment();
            var daydiff = newtime.diff(today, "days");
            // only concerns if # days ago is 0, -1 and less than rangedays
            if (daydiff == 0){
                return newtime.format(this.settings['todayformat']);
            } else if (daydiff == -1){
                return newtime.format(this.settings['yesterdayformat']);
            } else if (daydiff < 0 && Math.abs(this.settings.rangedaysago) >= Math.abs(daydiff)){
                return Math.abs(daydiff) + " " + newtime.format(this.settings['daysagoformat']);
            } else
            return newtime.format(this.settings['otherformat']);
        } else {
            return this.settings['time_format_error'];
        }
    };
};
