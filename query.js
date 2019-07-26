// query to test
query getSingleCourse($courseID: Int!) {
  course(id: $courseID) {
    title
    author
  }
}

query getCourses($topic: String!) {
   courses(topic: $topic) {
      title
      author
    	id
   }
}

query getCourseWithFragment($courseID: Int!, $topic: String!) {
    courseWithID: course(id: $courseID) {
        ...courseFields
    },
    allCoursesWithTopic: courses(topic: $topic) {
        ...courseFields
    }
}

fragment courseFields on Course {
    title
    author
    topic
}

// params
{
    "courseID": 1  //2 , 3
}

{
    "$topic": "Node.js"
}

{
    "courseID": 1,
    "$topic": "Node.js"
}