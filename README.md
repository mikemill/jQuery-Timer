**jQuery Timer**

A simple plugin that is designed to fire off an event during pauses in the user's typing.

-------------------------------------------------------------
**Example usage:**

```
$('#somerinput').timer({
	callback: function(timer)
	{
		$.post('validate.php', {
			code: timer.$elem.val(),
		}, function(data, textStatus, jqXHR)
		{
			alert(data.validate ? 'Valid' : 'Invalid');
		}, 'json');
	}
});
```

-------------------------------------------------------------
**How to Contribute**

I welcome all code contributions.  The ideal method is to use GitHub's practice of forking the repository and making a pull request.

1. Fork the repository and clone it
2. Commit your changes making sure to sign-off that you certify the changes are under the license of the project per the [Developer Certificate of Origin](https://github.com/mikemill/jQuery-Timer/blob/master/DCO.txt)
3. Push your changes to your repository
4. Create a pull request to the main repository.  See [Pull requests](http://help.github.com/send-pull-requests) for more information.

