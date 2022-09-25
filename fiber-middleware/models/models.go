package models

import "github.com/gofiber/fiber/v2"

type ProfileProcessorStruct func(userDetails string, next *fiber.Ctx)
type AuthenticateStruct func(configName string) fiber.Handler
type CallbackStruct func(configName string) fiber.Handler

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

type HelloAuthInstance struct {
	Authenticate AuthenticateStruct
	Callback     CallbackStruct
}
