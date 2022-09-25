package minion

import (
	"errors"
	"github.com/UniAuth/gin-middleware/models"
)

// GetConfigByName returns a config details from an array of configs passed by user.
func GetConfigByName(configs []models.ApplicationConfig, configName string) (config models.ApplicationConfig, err error) {
	for _, element := range configs {
		if element.Name == configName {
			return element, nil
		}

		return configs[0], errors.New("undefined config called")
	}
	return
}