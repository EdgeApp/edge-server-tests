import { makeConfig } from 'cleaner-config'
import { asArray, asBoolean, asNumber, asObject, asOptional, asString } from 'cleaners'

export const asPostmanEnvironment = asObject({
    id: asOptional(asString, 'dd58d2e1-3c1b-417d-b3d1-d5180b7eddb8'),
    name: asOptional(asString, 'edge-server-tests'),
    values: asOptional(
        asArray(
            asObject({
                key: asString,
                value: asString,
                enabled: asBoolean
            })
        ),
        [
            {
                key: 'infoUrl',
                value: 'https://info1.edge.app/v1',
                enabled: true
            },
            {
                key: 'ratesUrl',
                value: '',
                enabled: true
            }
        ]
    ),
    _postman_variable_scope: asOptional(asString, "environment"),
	_postman_exported_at: asOptional(asString, "2021-09-16T20:36:52.299Z"),
	_postman_exported_using: asOptional(asString, "Postman/8.12.1")
})

export const config = makeConfig(asPostmanEnvironment, './environments/edge-server-tests.postman_environment.json')