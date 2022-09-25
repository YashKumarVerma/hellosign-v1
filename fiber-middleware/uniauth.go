package fiber_middleware

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/yashkumarverma/fiber-middleware/minion"
	"github.com/yashkumarverma/fiber-middleware/models"
)

var helloAuthInstance models.HelloAuthInstance
var appConfigs []models.ApplicationConfig

// AuthenticateMiddleware redirects user to authorization page
func AuthenticateMiddleware(configName string) fiber.Handler {
	// return instance of fiber middleware
	return func(c *fiber.Ctx) error {
		config, err := minion.GetConfigByName(appConfigs, configName)
		if err != nil {
			fmt.Println(fmt.Sprintf("Config named %s was not found, using %s", configName, config.Name))
		}
		// generate url of helloAuth Server
		authLink := fmt.Sprintf("%s/%s?client_id=%s&redirect_uri=%s", config.Url, config.AuthEndpoint, config.ClientId, config.RedirectUri)
		// take a permanent redirect to auth server
		return c.Redirect(authLink, 302)
	}
}

// CallBackMiddleware handles the response from OAuth server and fetches user details
func CallbackMiddleware(configName string) fiber.Handler {
	config, err := minion.GetConfigByName(appConfigs, configName)
	if err != nil {
		panic("undefined config called")
	}
	return func(c *fiber.Ctx) error {
		accessToken := c.Query("access_token")
		response, err := minion.GetUserProfile(config, accessToken)
		if err != nil {
			panic("undefined config called")
		}
		config.ProfileProcessor(response, c)
		return nil
	}
}

// Init acts as a constructor to initiate the auth module
func Init(configs []models.ApplicationConfig) models.helloAuthInstance {
	helloAuthInstance = models.helloAuthInstance{
		Authenticate: AuthenticateMiddleware,
		Callback:     CallbackMiddleware,
	}
	fmt.Println("helloAuth Module Injected")
	appConfigs = configs

	return helloAuthInstance
}
