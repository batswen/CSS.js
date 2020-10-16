const fs = require("fs")

const css = []

function print(str) {
    css.push(str)
}

function write() {
    fs.unlink("./style.css", err => { if(err) console.log(err) })
    for (let s of css) {
        fs.appendFileSync("./style.css", s, "utf8")
    }
}

print("body{font-family:sans-serif;font-size:18px;padding:0;margin:0}\n")
print("input,button,select,textarea{font-family:inherit;font-size:inherit}\n")
print("*{box-sizing:border-box;}\n")

const dirsxy = {"x": ["left", "right"], "y": ["top", "bottom"]}
const dirs = {"t": "top", "r": "right", "b": "bottom", "l": "left"}
const actions = {p: "padding", m: "margin"}

for (let action in actions) {
	for (let i = 0; i <= 40; i += 5) {

		print("." + action + "-" + i + "{" + actions[action] + ":" + (i/10) + "rem;}\n")
		for (let dir in dirsxy) {
			print(
				"." + action + dir + "-" + i + "{"
					+ actions[action] + "-" + dirsxy[dir][0] + ":" + (i/10) + "rem;"
					+ actions[action] + "-" + dirsxy[dir][1] + ":" + (i/10) + "rem;}\n"
			)
		}
		for (let dir in dirs) {
			print(
				"." + action + dir + "-" + i + "{"
					+ actions[action] + "-" + dirs[dir] + ":" + (i/10) + "rem;}\n"
			)
		}
	}
}
print(".none{display:none;}")
print(".block{display:block;}")
print(".row{display:flex;flex-wrap:wrap;}")
print(".flex-center{align-items:center;}")
print(".flex-stretch{align-items:stretch;}")
for (let i = 5; i <= 100; i += 5) {
	print(".col-"+i+"{flex:"+i+"%;}")
}
print("@media screen and (max-width:650px) {.row{flex-direction:column;}}\n")

for (let i = 5; i <= 100; i += 5) {
	print(".w-"+i+"{width:"+i+"%;}")
}

for (let i = 0; i <= 15; i++) {
	print(".b-"+i+"{border-width:"+i+"px;}")
	print(".br-"+i+"{border-radius:"+(i/10)+"rem;}")
}
print(".b-round{border-radius:50%;}")
print(".b-solid{border-style:solid;}")
print(".b-dashed{border-style:dashed;}")
print(".b-dotted{border-style:dotted;}\n")

const hsl = {
	grey: [0,0],
	red: [0,100],
	yellow: [60,100],
	green: [120,100],
	cyan: [180,100],
	blue: [240,100],
	magenta:[300,100]
}
for (let col in hsl) {
	for (let i = 0; i <= 7; i++) {
		 print(".bg-"+col+"-"+i+"{background-color:hsl(" + hsl[col][0] + "," + hsl[col][1] + "%," + (i*10+15) + "%);}")
		 print(".txt-"+col+"-"+i+"{color:hsl(" + hsl[col][0] + "," + hsl[col][1] + "%," + (i*10+15) + "%);}")
		 print(".b-"+col+"-"+i+"{border-color:hsl(" + hsl[col][0] + "," + hsl[col][1] + "%," + (i*10+15) + "%);}")
		 print(".hover\\:bg-"+col+"-"+i+":hover{background-color:hsl(" + hsl[col][0] + "," + hsl[col][1] + "%," + (i*10+15) + "%);}")
		 print(".hover\\:txt-"+col+"-"+i+":hover{color:hsl(" + hsl[col][0] + "," + hsl[col][1] + "%," + (i*10+15) + "%);}")
		 print(".hover\\:b-"+col+"-"+i+":hover{border-color:hsl(" + hsl[col][0] + "," + hsl[col][1] + "%," + (i*10+15) + "%);}\n")
	}
}

print(".bg-white{background-color:white;}")
print(".txt-white{color:white;}")
print(".b-white{border-color:white;}")
print(".hover\\:bg-white:hover{background-color:white;}")
print(".hover\\:txt-white:hover{color:white;}")
print(".hover\\:b-white:hover{border-color:white;}\n")

print(".bg-black{background-color:black;}")
print(".txt-black{color:black;}")
print(".b-black{border-color:black;}")
print(".hover\\:bg-black:hover{background-color:black;}")
print(".hover\\:txt-black:hover{color:black;}")
print(".hover\\:b-black:hover{border-color:black;}\n")

write()
