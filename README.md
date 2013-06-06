# Chattertime (Javascript Library)

## Overview
Javascript library which takes Salesforce Chatter Time format and convert them into more readable format.

## Library Used

* JQuery 1.9.0
* Moment JS 1.7.2

## How to use (Copy this into your HTML page)

```
// include the library (library is also shared in dropbox public folder)
<script src="https://dl.dropboxusercontent.com/u/17694489/chattertime.js"></script>

<script>
    // initialization (optional)
    chattertime.init();

    // usage
    // chattertime.show(<time in string>);
    document.write(chattertime.show('2013-01-23T15:03:49.000Z'));

    // reset the default settings
    chattertime.init_default();
</script>

```

## Property Customization

```
chattertime.init({
    "inputformat" : [specify the time format of the input, default: YYYY-MM-DDTHH:mm:ss Z],
    "rangedaysago": [how many # days ago should be shown in the format, default 2 ],
    "time_format_error" : [error string when time is not in the correct input format],
    "todayformat" : [Format to be shown when the input time is today],
    "yesterdayformat" : [format to be shown when the input time is yesterday],
    "daysagoformat" : [Format to be shown if the input is still in the rage of the `rangedaysago`],
    "otherformat" : [Default Format to be shown]
});

```
