
document.getElementById("get-activity").addEventListener("click", function() {
  fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.getElementById("title").textContent = "🦾 HappyBot🦿"
      document.getElementById("reset").innerHTML = `<h4> Resetting in 5 seconds!</h4>`;
      document.body.classList.add("fun")
      document.getElementById("activity").classList.add("scared")
      setTimeout(() => { location.reload() }, 5000)
    })
})

