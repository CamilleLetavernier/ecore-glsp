/*******************************************************************************
 * Copyright (c) 2018 EclipseSource Muenchen GmbH.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *   
 * Contributors:
 * 	EclipseSource Muenchen GmbH - initial API and implementation
 ******************************************************************************/
import { ContainerModule } from "inversify";
import { LanguageServerContribution } from "@theia/languages/lib/node";
import { EcoreGLServerContribution } from "./ecore-glserver-contribution";

export default new ContainerModule(bind => {
    bind(LanguageServerContribution).to(EcoreGLServerContribution).inSingletonScope()
})