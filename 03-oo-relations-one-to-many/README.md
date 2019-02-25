Intro to OO Relations
===========================

## Lecture Notes



* Has Many / Belongs to

* Single Source of truth

#### Where we've been

class Batch
end

batch = Batch.new('nyc-web-021819')
batch.students
=> ['akram', 'victoria', 'sruthi']

khaled = Student.new('Khaled')
khaled.batch
=> 'nyc-web-021819'



#### Where we'll be from here on out

class Batch
end

batch = Batch.new('nyc-web-021819')
batch.students
=> [<Student @name='namoi'>, <Student>, <Student>]

khaled = Student.new('Khaled')
khaled.batch
=> <Batch @name='nyc-web-021819'>



#### Define terminology
  * Model: a class that holds the data
  class Batch <- Model
  class Student <- Model
  class GithubRepoSyncer <- service object

  * Domain / Domain Modeling
  A representation of the real world thing you're code is about
  Subject Matter




  * Schema

  * Deliverables
  * User Stories


### Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and has a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection

* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
