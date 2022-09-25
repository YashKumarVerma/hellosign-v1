pack_unix:
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o build/task-runner example/server.go

pack_win:
	GOOS=windows GOARCH=386 go build -o build/task-runner.exe example/server.go

run:
	go run example/server.go

clean:
	rm -rf build/*