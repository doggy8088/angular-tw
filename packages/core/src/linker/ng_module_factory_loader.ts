/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Type} from '../interface/type';
import {NgModuleType} from '../metadata/ng_module_def';
import {NgModuleFactory as R3NgModuleFactory} from '../render3/ng_module_ref';

import {NgModuleFactory} from './ng_module_factory';
import {getRegisteredNgModuleType} from './ng_module_factory_registration';

/**
 * Returns the NgModuleFactory with the given id (specified using [@NgModule.id
 * field](api/core/NgModule#id)), if it exists and has been loaded. Factories for NgModules that do
 * not specify an `id` cannot be retrieved. Throws if an NgModule cannot be found.
 *
 * 返回具有给定 id 的 NgModuleFactory（如果存在并且已加载）。无法检索未指定过 `id`
 * 的模块工厂。如果找不到模块，则抛出该异常。
 *
 * @publicApi
 * @deprecated Use `getNgModuleById` instead.
 */
export function getModuleFactory(id: string): NgModuleFactory<any> {
  const type = getRegisteredNgModuleType(id) as NgModuleType | null;
  if (!type) throw noModuleError(id);
  return new R3NgModuleFactory(type);
}

/**
 * Returns the NgModule class with the given id (specified using [@NgModule.id
 * field](api/core/NgModule#id)), if it exists and has been loaded. Classes for NgModules that do
 * not specify an `id` cannot be retrieved. Throws if an NgModule cannot be found.
 * @publicApi
 */
export function getNgModuleById<T>(id: string): Type<T> {
  const type = getRegisteredNgModuleType<NgModuleType>(id);
  if (!type) throw noModuleError(id);
  return type;
}

function noModuleError(
    id: string,
    ): Error {
  return new Error(`No module with ID ${id} loaded`);
}
