# React Router Dog Finder
Build an app that allows a user to browse dogs.

At the top of the app, add a navbar that displays the current active route.

The app should have the following routes:
<ul>
<li>/dogs is the homepage and shows all three dogs</li>
<li>When you’re on the homepage, you can click on a dog to view more information on that dog. Each dog should have its own unique route. For example, clicking on Whiskey will take you to /dogs/whiskey.</li>
  <li>Every other endpoint not listed should redirect you to /dogs.</li>
</ul>

Make the website responsive (if you have time). The solution uses bootstrap to add a responsive navbar and grid layout.

## Recommended Structure
You can preload the <App /> component with the following defaultProps for convenience:

<code>
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
}
  </code>
  <br>
  <br>
  
The <App /> should render:
<ul>
<li> <Nav /> component with the dogs’ names passed as props </li>
<li><Switch> with your <Route /> declarations</li>
</ul>
