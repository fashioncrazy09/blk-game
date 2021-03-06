/**
 * Copyright 2012 Google, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @author benvanik@google.com (Ben Vanik)
 */

goog.provide('blk.sim.commands.CommandType');


/**
 * Command type table.
 * Commands need only have unique IDs in a single module; in this case, BLK.
 * @enum {number}
 */
blk.sim.commands.CommandType = {
  /** {@see blk.sim.commands.SetAspectRatioCommand} */
  SET_ASPECT_RATIO: 0,
  /** {@see blk.sim.commands.PlayerMoveCommand} */
  PLAYER_MOVE: 1,
  /** {@see blk.sim.commands.SetBlockCommand} */
  SET_BLOCK: 2,
  /** {@see blk.sim.commands.SetHeldToolCommand} */
  SET_HELD_TOOL: 3
};
