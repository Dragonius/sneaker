package server

import (
	"fmt"
	//readying to hashing passwords
	//"crypto/sha256"
	"github.com/b1naryth1ef/jambon/tacview"
	"log"
)

type TacViewClient struct {
	host     string
	port     int
	password string
}

func NewTacViewClient(host string, port int, password string) *TacViewClient {

	//readying for hashed passwords
	//first := sha256.New()
	//first.Write([]byte(password))
	//fmt.Printf("%x\n", first.Sum(nil))
	//passwordhashed := string(first.Sum(nil))
	//if password != passwordhashed {
		//fmt.Printf("password %s\n",password)
		//fmt.Printf("password hashed %s\n",passwordhashed)
		//password = passwordhashed
	//}
	//fmt.Printf("port %x\n",port)
	//fmt.Printf("host %x\n",host)

	if port == 0 {
		port = 42674
	}

	return &TacViewClient{host: host, port: port, password: password}
}


func (c *TacViewClient) Start() (*tacview.Header, chan *tacview.TimeFrame, error) {
	reader, err := tacview.NewRealTimeReader(fmt.Sprintf("%s:%d", c.host, c.port), "sneakerserver", c.password)
	log.Printf("[host:%v] port %v password %s", c.host, c.port, c.password)

	if err != nil {
		return nil, nil, err
	}

	data := make(chan *tacview.TimeFrame, 1)
	go reader.ProcessTimeFrames(1, data)
	return &reader.Header, data, nil
}
