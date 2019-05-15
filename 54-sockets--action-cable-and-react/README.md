# Resources

* [react-actioncable-provider how to blog, start here](https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296)
* [creating-a-drawing-with-friends-web-app-w-action-cable-and-rails-5](https://medium.com/@hdwatts/creating-a-drawing-with-friends-web-app-w-action-cable-and-rails-5-1052ac43d74b)
* [Heroku and ActionCable](https://blog.heroku.com/real_time_rails_implementing_websockets_in_rails_5_with_action_cable#what-are-websockets)
* [Shameless Plug - sockets with phoenix and react hooks](https://medium.com/flatiron-labs/improving-ux-with-phoenix-channels-react-hooks-8e661d3a771e)


* [Gist where I break down how something like the `react-actioncable-provider` library is made](https://gist.github.com/alexgriff/7872ce828c867a1cc5f4e946e61f1998)

## "Hidden Names"
App: [http://hidden-names.herokuapp.com/](http://hidden-names.herokuapp.com/)

* [Frontend Code](https://github.com/alexgriff/hidden_phrase_frontend)
* [Backend Code](https://github.com/alexgriff/hidden_phrase_backend)


# Lecture Notes
### Backend
* handshake route
`mount ActionCable.server => '/cable'`

* create channel
`rails g channel feed`

```ruby
class FeedChannel < ApplicationCable::Channel
  def subscribed
    stream_from "my_feed"
  end

  def unsubscribed
    raise "huh?"
    # Any cleanup needed when channel is unsubscribed
  end
end
```

* broadcast
`ActionCable.server.broadcast('my_feed', tweet)`

### Frontend
* wrap the app in the provider


```jsx
import { ActionCableProvider } from 'react-actioncable-provider';


<ActionCableProvider url={'ws://localhost:3001/cable'}>
  <App />
</ActionCableProvider>
```

* in the component

```jsx
	<ActionCableConsumer
    channel={{ channel: 'FeedChannel' }}
    onReceived={tweet => {
      console.log('tweet');
      this.addTweet(tweet);
    }}
  />
```
