package models

import "github.com/gin-gonic/gin"

type ProfileProcessorStruct func(userDetails string)
type AuthenticateStruct func(configName string) gin.HandlerFunc
type CallbackStruct func(configName string) gin.HandlerFunc

type ApplicationConfig struct {
	Name             string
	Url              string
	ClientId         string
	ClientSecret     string
	RedirectUri      string
	AuthEndpoint     string
	ProfileEndpoint  string
	ProfileProcessor ProfileProcessorStruct
}

type UniAuthInstance struct {
	Authenticate AuthenticateStruct
	Callback     CallbackStruct
}
