
console.log(process.argv)
// process.argv es un array que contiene los argumentos de la linea de comandos

// process.exit(0) // 0 means success
// process.exit(1) // 1 means failure

process.on('exit', (code) => {
  console.log(`Process exited with code: ${code}`)
}
)
//.on significa que estas controlando como salir

process.cwd() // current working directory

