/**
 * @file home service
 *      service  example
 * @author lihaizhu
 * @since 2018/08/04
 */

import {API_ROOT, METHOD} from 'Src/constants';
import request from 'Src/utils/request';

export function fetch() {
    return request(`${API_ROOT.home}getList`);
}

export function submit(body) {
    return request(`${API_ROOT.home}getList`, {
        method: METHOD.post,
        body
    }, true);
}