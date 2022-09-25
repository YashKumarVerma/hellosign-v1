package minion

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/yashkumarverma/gin-middleware/models"
)

// GetUserProfile exchanges access_token with user profile details
func GetUserProfile(config models.ApplicationConfig, accessToken string) (response string, err error) {
	postBody, _ := json.Marshal(map[string]string{
		"clientId":     config.ClientId,
		"clientSecret": config.ClientSecret,
		"accessToken":  accessToken,
	})
	responseBody := bytes.NewBuffer(postBody)
	resp, err := http.Post(fmt.Sprintf("%s/%s", config.Url, config.ProfileEndpoint), "application/json", responseBody)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)

	return string(body), err
}
